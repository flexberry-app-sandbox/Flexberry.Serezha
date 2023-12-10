import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-serezha-заказы-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-serezha-состав-заказа+напитки':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'напитки',
            projection: 'НапиткиL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-serezha-состав-заказа+блюда':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'блюда',
            projection: 'БлюдаL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
