import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипНомераEnum from '../enums/i-i-s-serezha-тип-номера';

export default FlexberryEnum.extend({
  enum: ТипНомераEnum,
  sourceType: 'IIS.Serezha.ТипНомера'
});
