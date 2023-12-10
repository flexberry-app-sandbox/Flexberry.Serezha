import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.сотрудники.title'),
          children: [{
            link: 'i-i-s-serezha-должности-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-serezha-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-serezha-должности-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-serezha-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-serezha-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-serezha-сотрудник-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.наши-клиенты.caption'),
          title: i18n.t('forms.application.sitemap.наши-клиенты.title'),
          children: [{
            link: 'i-i-s-serezha-клиенты-l',
            caption: i18n.t('forms.application.sitemap.наши-клиенты.i-i-s-serezha-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.наши-клиенты.i-i-s-serezha-клиенты-l.title'),
            icon: 'building',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.меню-ресторана.caption'),
          title: i18n.t('forms.application.sitemap.меню-ресторана.title'),
          children: [{
            link: 'i-i-s-serezha-блюда-l',
            caption: i18n.t('forms.application.sitemap.меню-ресторана.i-i-s-serezha-блюда-l.caption'),
            title: i18n.t('forms.application.sitemap.меню-ресторана.i-i-s-serezha-блюда-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-serezha-напитки-l',
            caption: i18n.t('forms.application.sitemap.меню-ресторана.i-i-s-serezha-напитки-l.caption'),
            title: i18n.t('forms.application.sitemap.меню-ресторана.i-i-s-serezha-напитки-l.title'),
            icon: 'building',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.заказы.caption'),
          title: i18n.t('forms.application.sitemap.заказы.title'),
          children: [{
            link: 'i-i-s-serezha-заказы-l',
            caption: i18n.t('forms.application.sitemap.заказы.i-i-s-serezha-заказы-l.caption'),
            title: i18n.t('forms.application.sitemap.заказы.i-i-s-serezha-заказы-l.title'),
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.номера-и-продукты.caption'),
          title: i18n.t('forms.application.sitemap.номера-и-продукты.title'),
          children: [{
            link: 'i-i-s-serezha-продукты-l',
            caption: i18n.t('forms.application.sitemap.номера-и-продукты.i-i-s-serezha-продукты-l.caption'),
            title: i18n.t('forms.application.sitemap.номера-и-продукты.i-i-s-serezha-продукты-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-serezha-номера-l',
            caption: i18n.t('forms.application.sitemap.номера-и-продукты.i-i-s-serezha-номера-l.caption'),
            title: i18n.t('forms.application.sitemap.номера-и-продукты.i-i-s-serezha-номера-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})