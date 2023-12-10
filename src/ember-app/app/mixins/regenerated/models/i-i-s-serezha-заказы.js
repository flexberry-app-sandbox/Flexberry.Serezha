import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаИВремя: DS.attr('string'),
  кодЗаказа: DS.attr('number'),
  типВручения: DS.attr('i-i-s-serezha-тип-вручения'),
  типОплаты: DS.attr('i-i-s-serezha-тип-оплаты'),
  клиенты: DS.belongsTo('i-i-s-serezha-клиенты', { inverse: null, async: false }),
  номера: DS.belongsTo('i-i-s-serezha-номера', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-serezha-сотрудник', { inverse: null, async: false }),
  составЗаказа: DS.hasMany('i-i-s-serezha-состав-заказа', { inverse: 'заказы', async: false })
});

export let ValidationRules = {
  датаИВремя: {
    descriptionKey: 'models.i-i-s-serezha-заказы.validations.датаИВремя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодЗаказа: {
    descriptionKey: 'models.i-i-s-serezha-заказы.validations.кодЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  типВручения: {
    descriptionKey: 'models.i-i-s-serezha-заказы.validations.типВручения.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  типОплаты: {
    descriptionKey: 'models.i-i-s-serezha-заказы.validations.типОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-serezha-заказы.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  номера: {
    descriptionKey: 'models.i-i-s-serezha-заказы.validations.номера.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-serezha-заказы.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  составЗаказа: {
    descriptionKey: 'models.i-i-s-serezha-заказы.validations.составЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказыE', 'i-i-s-serezha-заказы', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    датаИВремя: attr('Дата и время', { index: 1 }),
    типОплаты: attr('Тип оплаты', { index: 2 }),
    типВручения: attr('Тип вручения', { index: 3 }),
    номера: belongsTo('i-i-s-serezha-номера', 'Номера', {
      номерКомнаты: attr('Номер комнаты', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'номерКомнаты' }),
    сотрудник: belongsTo('i-i-s-serezha-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия сотрудника', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'фамилия' }),
    клиенты: belongsTo('i-i-s-serezha-клиенты', 'Клиенты', {
      фамилия: attr('Фамилия клиента', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'фамилия' }),
    составЗаказа: hasMany('i-i-s-serezha-состав-заказа', 'Состав заказа', {
      сумма: attr('Сумма', { index: 0 }),
      комментарий: attr('Комментарий', { index: 1 }),
      напитки: belongsTo('i-i-s-serezha-напитки', 'Напитки', {
        наименование: attr('Наименование напитка', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'наименование' }),
      блюда: belongsTo('i-i-s-serezha-блюда', 'Блюда', {
        наименование: attr('Наименование блюда', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ЗаказыL', 'i-i-s-serezha-заказы', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    датаИВремя: attr('Дата и время', { index: 1 }),
    типОплаты: attr('Тип оплаты', { index: 2 }),
    типВручения: attr('Тип вручения', { index: 3 }),
    номера: belongsTo('i-i-s-serezha-номера', 'Номер комнаты', {
      номерКомнаты: attr('Номер комнаты', { index: 4 })
    }, { index: -1, hidden: true }),
    сотрудник: belongsTo('i-i-s-serezha-сотрудник', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 5 })
    }, { index: -1, hidden: true }),
    клиенты: belongsTo('i-i-s-serezha-клиенты', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
