import { Serializer as ЗаказыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-serezha-заказы';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаказыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
