import {
  defineNamespace,
  defineProjections,
  Model as ПродуктыMixin
} from '../mixins/regenerated/models/i-i-s-serezha-продукты';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПродуктыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
