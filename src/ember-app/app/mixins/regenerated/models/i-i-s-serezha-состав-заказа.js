import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  комментарий: DS.attr('string'),
  сумма: DS.attr('decimal'),
  блюда: DS.belongsTo('i-i-s-serezha-блюда', { inverse: null, async: false }),
  напитки: DS.belongsTo('i-i-s-serezha-напитки', { inverse: null, async: false }),
  заказы: DS.belongsTo('i-i-s-serezha-заказы', { inverse: 'составЗаказа', async: false })
});

export let ValidationRules = {
  комментарий: {
    descriptionKey: 'models.i-i-s-serezha-состав-заказа.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-serezha-состав-заказа.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  блюда: {
    descriptionKey: 'models.i-i-s-serezha-состав-заказа.validations.блюда.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  напитки: {
    descriptionKey: 'models.i-i-s-serezha-состав-заказа.validations.напитки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказы: {
    descriptionKey: 'models.i-i-s-serezha-состав-заказа.validations.заказы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставЗаказаE', 'i-i-s-serezha-состав-заказа', {
    сумма: attr('Сумма', { index: 0 }),
    комментарий: attr('Комментарий', { index: 1 }),
    напитки: belongsTo('i-i-s-serezha-напитки', 'Напитки', {
      наименование: attr('Наименование напитка', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' }),
    блюда: belongsTo('i-i-s-serezha-блюда', 'Блюда', {
      наименование: attr('Наименование блюда', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наименование' })
  });
};
