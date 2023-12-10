import {
  defineNamespace,
  defineProjections,
  Model as НомераMixin
} from '../mixins/regenerated/models/i-i-s-serezha-номера';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НомераMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
