import {
  defineNamespace,
  defineProjections,
  Model as СотрудникMixin
} from '../mixins/regenerated/models/i-i-s-serezha-сотрудник';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СотрудникMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
