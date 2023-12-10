import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSerezhaБлюдаLForm from './forms/i-i-s-serezha-блюда-l';
import IISSerezhaДолжностиLForm from './forms/i-i-s-serezha-должности-l';
import IISSerezhaЗаказыLForm from './forms/i-i-s-serezha-заказы-l';
import IISSerezhaКлиентыLForm from './forms/i-i-s-serezha-клиенты-l';
import IISSerezhaНапиткиLForm from './forms/i-i-s-serezha-напитки-l';
import IISSerezhaНомераLForm from './forms/i-i-s-serezha-номера-l';
import IISSerezhaПродуктыLForm from './forms/i-i-s-serezha-продукты-l';
import IISSerezhaСотрудникLForm from './forms/i-i-s-serezha-сотрудник-l';
import IISSerezhaБлюдаEForm from './forms/i-i-s-serezha-блюда-e';
import IISSerezhaДолжностиEForm from './forms/i-i-s-serezha-должности-e';
import IISSerezhaЗаказыEForm from './forms/i-i-s-serezha-заказы-e';
import IISSerezhaКлиентыEForm from './forms/i-i-s-serezha-клиенты-e';
import IISSerezhaНапиткиEForm from './forms/i-i-s-serezha-напитки-e';
import IISSerezhaНомераEForm from './forms/i-i-s-serezha-номера-e';
import IISSerezhaПродуктыEForm from './forms/i-i-s-serezha-продукты-e';
import IISSerezhaСотрудникEForm from './forms/i-i-s-serezha-сотрудник-e';
import IISSerezhaБлюдаModel from './models/i-i-s-serezha-блюда';
import IISSerezhaДолжностиModel from './models/i-i-s-serezha-должности';
import IISSerezhaЗаказыModel from './models/i-i-s-serezha-заказы';
import IISSerezhaКлиентыModel from './models/i-i-s-serezha-клиенты';
import IISSerezhaНапиткиModel from './models/i-i-s-serezha-напитки';
import IISSerezhaНомераModel from './models/i-i-s-serezha-номера';
import IISSerezhaПродуктыModel from './models/i-i-s-serezha-продукты';
import IISSerezhaСоставБлюдаModel from './models/i-i-s-serezha-состав-блюда';
import IISSerezhaСоставЗаказаModel from './models/i-i-s-serezha-состав-заказа';
import IISSerezhaСоставНапитковModel from './models/i-i-s-serezha-состав-напитков';
import IISSerezhaСотрудникModel from './models/i-i-s-serezha-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-serezha-блюда': IISSerezhaБлюдаModel,
    'i-i-s-serezha-должности': IISSerezhaДолжностиModel,
    'i-i-s-serezha-заказы': IISSerezhaЗаказыModel,
    'i-i-s-serezha-клиенты': IISSerezhaКлиентыModel,
    'i-i-s-serezha-напитки': IISSerezhaНапиткиModel,
    'i-i-s-serezha-номера': IISSerezhaНомераModel,
    'i-i-s-serezha-продукты': IISSerezhaПродуктыModel,
    'i-i-s-serezha-состав-блюда': IISSerezhaСоставБлюдаModel,
    'i-i-s-serezha-состав-заказа': IISSerezhaСоставЗаказаModel,
    'i-i-s-serezha-состав-напитков': IISSerezhaСоставНапитковModel,
    'i-i-s-serezha-сотрудник': IISSerezhaСотрудникModel
  },

  'application-name': 'Serezha',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Serezha',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Serezha',
          title: 'Serezha'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-serezha-должности-l': {
            caption: 'Должности',
            title: 'Должности'
          },
          'i-i-s-serezha-сотрудник-l': {
            caption: 'Сотрудник',
            title: 'Сотрудник'
          }
        },
        'наши-клиенты': {
          caption: 'Наши клиенты',
          title: 'Наши клиенты',
          'i-i-s-serezha-клиенты-l': {
            caption: 'Клиенты',
            title: 'Клиенты'
          }
        },
        'меню-ресторана': {
          caption: 'Меню ресторана',
          title: 'Меню ресторана',
          'i-i-s-serezha-блюда-l': {
            caption: 'Блюда',
            title: 'Блюда'
          },
          'i-i-s-serezha-напитки-l': {
            caption: 'Напитки',
            title: 'Напитки'
          }
        },
        заказы: {
          caption: 'Заказы',
          title: 'Заказы',
          'i-i-s-serezha-заказы-l': {
            caption: 'Заказы',
            title: 'Заказы'
          }
        },
        'номера-и-продукты': {
          caption: 'Номера и продукты',
          title: 'Номера и продукты',
          'i-i-s-serezha-продукты-l': {
            caption: 'Продукты',
            title: 'Продукты'
          },
          'i-i-s-serezha-номера-l': {
            caption: 'Номера',
            title: 'Номера'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-serezha-блюда-l': IISSerezhaБлюдаLForm,
    'i-i-s-serezha-должности-l': IISSerezhaДолжностиLForm,
    'i-i-s-serezha-заказы-l': IISSerezhaЗаказыLForm,
    'i-i-s-serezha-клиенты-l': IISSerezhaКлиентыLForm,
    'i-i-s-serezha-напитки-l': IISSerezhaНапиткиLForm,
    'i-i-s-serezha-номера-l': IISSerezhaНомераLForm,
    'i-i-s-serezha-продукты-l': IISSerezhaПродуктыLForm,
    'i-i-s-serezha-сотрудник-l': IISSerezhaСотрудникLForm,
    'i-i-s-serezha-блюда-e': IISSerezhaБлюдаEForm,
    'i-i-s-serezha-должности-e': IISSerezhaДолжностиEForm,
    'i-i-s-serezha-заказы-e': IISSerezhaЗаказыEForm,
    'i-i-s-serezha-клиенты-e': IISSerezhaКлиентыEForm,
    'i-i-s-serezha-напитки-e': IISSerezhaНапиткиEForm,
    'i-i-s-serezha-номера-e': IISSerezhaНомераEForm,
    'i-i-s-serezha-продукты-e': IISSerezhaПродуктыEForm,
    'i-i-s-serezha-сотрудник-e': IISSerezhaСотрудникEForm
  },

});

export default translations;
