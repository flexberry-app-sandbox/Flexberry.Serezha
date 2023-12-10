import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодНапитка: DS.attr('number'),
  наименование: DS.attr('string'),
  стоимость: DS.attr('decimal'),
  составНапитков: DS.hasMany('i-i-s-serezha-состав-напитков', { inverse: 'напитки', async: false })
});

export let ValidationRules = {
  кодНапитка: {
    descriptionKey: 'models.i-i-s-serezha-напитки.validations.кодНапитка.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-serezha-напитки.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-serezha-напитки.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  составНапитков: {
    descriptionKey: 'models.i-i-s-serezha-напитки.validations.составНапитков.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НапиткиE', 'i-i-s-serezha-напитки', {
    кодНапитка: attr('Код напитка', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 }),
    составНапитков: hasMany('i-i-s-serezha-состав-напитков', 'Состав напитков', {
      количество: attr('Количество', { index: 0 }),
      единицы: attr('Единицы', { index: 1 }),
      продукты: belongsTo('i-i-s-serezha-продукты', 'Продукты', {
        наименование: attr('Наименование', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('НапиткиL', 'i-i-s-serezha-напитки', {
    кодНапитка: attr('Код напитка', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 })
  });
};
