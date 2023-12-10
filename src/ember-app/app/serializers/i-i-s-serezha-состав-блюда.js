import { Serializer as СоставБлюдаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-serezha-состав-блюда';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СоставБлюдаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
