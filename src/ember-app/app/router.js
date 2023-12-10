import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-serezha-блюда-l');
  this.route('i-i-s-serezha-блюда-e',
  { path: 'i-i-s-serezha-блюда-e/:id' });
  this.route('i-i-s-serezha-блюда-e.new',
  { path: 'i-i-s-serezha-блюда-e/new' });
  this.route('i-i-s-serezha-должности-l');
  this.route('i-i-s-serezha-должности-e',
  { path: 'i-i-s-serezha-должности-e/:id' });
  this.route('i-i-s-serezha-должности-e.new',
  { path: 'i-i-s-serezha-должности-e/new' });
  this.route('i-i-s-serezha-заказы-l');
  this.route('i-i-s-serezha-заказы-e',
  { path: 'i-i-s-serezha-заказы-e/:id' });
  this.route('i-i-s-serezha-заказы-e.new',
  { path: 'i-i-s-serezha-заказы-e/new' });
  this.route('i-i-s-serezha-клиенты-l');
  this.route('i-i-s-serezha-клиенты-e',
  { path: 'i-i-s-serezha-клиенты-e/:id' });
  this.route('i-i-s-serezha-клиенты-e.new',
  { path: 'i-i-s-serezha-клиенты-e/new' });
  this.route('i-i-s-serezha-напитки-l');
  this.route('i-i-s-serezha-напитки-e',
  { path: 'i-i-s-serezha-напитки-e/:id' });
  this.route('i-i-s-serezha-напитки-e.new',
  { path: 'i-i-s-serezha-напитки-e/new' });
  this.route('i-i-s-serezha-номера-l');
  this.route('i-i-s-serezha-номера-e',
  { path: 'i-i-s-serezha-номера-e/:id' });
  this.route('i-i-s-serezha-номера-e.new',
  { path: 'i-i-s-serezha-номера-e/new' });
  this.route('i-i-s-serezha-продукты-l');
  this.route('i-i-s-serezha-продукты-e',
  { path: 'i-i-s-serezha-продукты-e/:id' });
  this.route('i-i-s-serezha-продукты-e.new',
  { path: 'i-i-s-serezha-продукты-e/new' });
  this.route('i-i-s-serezha-сотрудник-l');
  this.route('i-i-s-serezha-сотрудник-e',
  { path: 'i-i-s-serezha-сотрудник-e/:id' });
  this.route('i-i-s-serezha-сотрудник-e.new',
  { path: 'i-i-s-serezha-сотрудник-e/new' });
});

export default Router;
