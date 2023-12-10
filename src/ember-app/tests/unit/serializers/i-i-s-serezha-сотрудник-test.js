import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-serezha-сотрудник', 'Unit | Serializer | i-i-s-serezha-сотрудник', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-serezha-сотрудник',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-serezha-единицы',
    'transform:i-i-s-serezha-тип-вручения',
    'transform:i-i-s-serezha-тип-номера',
    'transform:i-i-s-serezha-тип-оплаты',

    'model:i-i-s-serezha-блюда',
    'model:i-i-s-serezha-должности',
    'model:i-i-s-serezha-заказы',
    'model:i-i-s-serezha-клиенты',
    'model:i-i-s-serezha-напитки',
    'model:i-i-s-serezha-номера',
    'model:i-i-s-serezha-продукты',
    'model:i-i-s-serezha-состав-блюда',
    'model:i-i-s-serezha-состав-заказа',
    'model:i-i-s-serezha-состав-напитков',
    'model:i-i-s-serezha-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
