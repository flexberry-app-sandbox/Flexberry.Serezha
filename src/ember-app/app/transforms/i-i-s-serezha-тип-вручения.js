import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипВрученияEnum from '../enums/i-i-s-serezha-тип-вручения';

export default FlexberryEnum.extend({
  enum: ТипВрученияEnum,
  sourceType: 'IIS.Serezha.ТипВручения'
});
