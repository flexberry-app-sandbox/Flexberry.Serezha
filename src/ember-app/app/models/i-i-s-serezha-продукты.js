import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПродуктыMixin
} from '../mixins/regenerated/models/i-i-s-serezha-продукты';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПродуктыMixin, Validations, {
});

defineProjections(Model);

export default Model;
