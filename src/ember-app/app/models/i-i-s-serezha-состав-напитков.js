import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СоставНапитковMixin
} from '../mixins/regenerated/models/i-i-s-serezha-состав-напитков';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СоставНапитковMixin, Validations, {
});

defineProjections(Model);

export default Model;
