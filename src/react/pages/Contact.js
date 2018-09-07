import React from 'react';
import Swal from 'sweetalert2';
import 'whatwg-fetch';

import Container from '../components/Container';

import { translations_store } from '../../assets/tools/functions/translations';

const URL = 'https://www.enformed.io/',
  TOKEN = 'n42e606v',
  MAIL = 'trystan.eveno@gmail.com';

const Contact = () => {
  const sendMail = () => {
    Swal({
      title: translations_store('contact.mail.label_title'),
      html:
        '<p class="label">'+ translations_store('contact.mail.label_name') +' :</p>' +
        '<input class="swal2-input" name="name" type="text" placeholder="Trystan Eveno" required />' +
        '<p class="label">'+ translations_store('contact.mail.label_mail') +' :</p>' +
        '<input class="swal2-input" name="email" type="email" placeholder="trystan.eveno@gmail.com" required />' +
        '<p class="label">'+ translations_store('contact.mail.label_subject') +' :</p>' +
        '<input class="swal2-input" name="subject" type="text" placeholder="Mail" required />' +
        '<p class="label">'+ translations_store('contact.mail.label_message') +' :</p>' +
        '<textarea class="swal2-input" name="message" placeholder="'+ translations_store('contact.mail.hi') +'" required></textarea>' +
        '<input type="hidden" name="*honeypot" value="" />',
      showCancelButton: true,
      confirmButtonText: '✔ '+ translations_store('contact.mail.send'),
      cancelButtonText: translations_store('cancel'),
      onOpen: () => Swal.getConfirmButton().blur()
    }).then(result => {
      const name = document.querySelector('input[name="name"]'),
        email = document.querySelector('input[name="email"]'),
        subject = document.querySelector('input[name="subject"]'),
        message = document.querySelector('textarea[name="message"]'),
        honeypot = document.querySelector('input[name="*honeypot"]');

      if (result.value && name.value.length > 0 && email.value.length > 0 && subject.value.length > 0 && message.value.length > 0 && honeypot.value.length < 1) {
        let form = new FormData();

        form.append('name', name.value.trim());
        form.append('email', email.value.trim());
        form.append('subject', subject.value.trim());
        form.append('message', message.value.trim());
        form.append('*reply', 'email');
        form.append('*subject', translations_store('contact.mail.default_subject'));
        form.append('*default_email', MAIL);

        fetch(URL + TOKEN, {
          method: 'POST',
          body: form
        }).then(response => {
          if (response.status === 200) {
            Swal({
              text: translations_store('contact.mail.success'),
              title: translations_store('contact.mail.success_title'),
              type: 'success',
              onOpen: () => Swal.getConfirmButton().blur()
            });
          } else {
            Swal({
              text: translations_store('contact.mail.error'),
              title: translations_store('contact.mail.error_title'),
              type: 'error',
              onOpen: () => Swal.getConfirmButton().blur()
            });
          }
        });
      } else {
        Swal({
          text: translations_store('contact.mail.missing_parameters'),
          title: translations_store('contact.mail.missing_parameters_title'),
          type: 'error',
          onOpen: () => Swal.getConfirmButton().blur()
        });
      }
    });
  };

  return (
    <Container>
      <div id="Contact" className="content">
        <div className="top">
          <h1>{ translations_store('contact.title') }</h1>
          <button className="btn btn-primary" role="button" onClick={ () => sendMail() }>{ translations_store('contact.mail') }</button>
        </div>
        <div className="wrapper-atom" title="Animation Atom Electrons">
          <div className="wrap">
            <div className="circle horizontal c1">
              <div className="wrap-electron">
                <div className="circle electron"></div>
              </div>
            </div>
            <div className="circle vertical c1">
              <div className="wrap-electron">
                <div className="circle electron"></div>
              </div>
            </div>
          </div>
          <div className="wrap r">
            <div className="circle horizontal c2">
              <div className="wrap-electron">
                <div className="circle electron"></div>
              </div>
            </div>
            <div className="circle vertical c2">
              <div className="wrap-electron">
                <div className="circle electron"></div>
              </div>
            </div>
            <div className="circle center"></div>
          </div>
        </div>
        <div className="bottom">
          <h3>{ translations_store('contact.social_network') }</h3>
          <div className="mt-5">
            <a href="https://github.com/MaitreManuel" className="px-5" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github fa-3x" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/trystan-eveno" className="px-5" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/Maitre_Manuel" className="px-5" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter fa-3x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
