import {
  defineNamespace,
  defineProjections,
  Model as БлюдаMixin
} from '../mixins/regenerated/models/i-i-s-serezha-блюда';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(БлюдаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
