import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерКомнаты: DS.attr('number'),
  типНомера: DS.attr('i-i-s-serezha-тип-номера')
});

export let ValidationRules = {
  номерКомнаты: {
    descriptionKey: 'models.i-i-s-serezha-номера.validations.номерКомнаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  типНомера: {
    descriptionKey: 'models.i-i-s-serezha-номера.validations.типНомера.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НомераE', 'i-i-s-serezha-номера', {
    номерКомнаты: attr('Номер комнаты', { index: 0 }),
    типНомера: attr('Тип номера', { index: 1 })
  });

  modelClass.defineProjection('НомераL', 'i-i-s-serezha-номера', {
    номерКомнаты: attr('Номер комнаты', { index: 0 }),
    типНомера: attr('Тип номера', { index: 1 })
  });
};
