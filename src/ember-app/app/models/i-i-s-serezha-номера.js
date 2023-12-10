import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as НомераMixin
} from '../mixins/regenerated/models/i-i-s-serezha-номера';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(НомераMixin, Validations, {
});

defineProjections(Model);

export default Model;
