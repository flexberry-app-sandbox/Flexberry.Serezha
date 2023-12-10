import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодБлюда: DS.attr('number'),
  наименование: DS.attr('string'),
  стоимость: DS.attr('decimal'),
  составБлюда: DS.hasMany('i-i-s-serezha-состав-блюда', { inverse: 'блюда', async: false })
});

export let ValidationRules = {
  кодБлюда: {
    descriptionKey: 'models.i-i-s-serezha-блюда.validations.кодБлюда.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-serezha-блюда.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-serezha-блюда.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  составБлюда: {
    descriptionKey: 'models.i-i-s-serezha-блюда.validations.составБлюда.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БлюдаE', 'i-i-s-serezha-блюда', {
    кодБлюда: attr('Код блюда', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 }),
    составБлюда: hasMany('i-i-s-serezha-состав-блюда', 'Состав блюда', {
      количество: attr('Количество', { index: 0 }),
      единицы: attr('Единицы', { index: 1 }),
      продукты: belongsTo('i-i-s-serezha-продукты', 'Продукты', {
        наименование: attr('Наименование', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('БлюдаL', 'i-i-s-serezha-блюда', {
    кодБлюда: attr('Код блюда', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 })
  });
};
