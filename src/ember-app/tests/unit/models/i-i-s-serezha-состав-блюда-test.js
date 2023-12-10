import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-serezha-состав-блюда', 'Unit | Model | i-i-s-serezha-состав-блюда', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
