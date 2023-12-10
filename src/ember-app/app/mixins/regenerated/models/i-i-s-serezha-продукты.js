import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  производитель: DS.attr('string')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-serezha-продукты.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  производитель: {
    descriptionKey: 'models.i-i-s-serezha-продукты.validations.производитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПродуктыE', 'i-i-s-serezha-продукты', {
    наименование: attr('Наименование', { index: 0 }),
    производитель: attr('Производитель', { index: 1 })
  });

  modelClass.defineProjection('ПродуктыL', 'i-i-s-serezha-продукты', {
    наименование: attr('Наименование', { index: 0 }),
    производитель: attr('Производитель', { index: 1 })
  });
};
