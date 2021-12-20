const cartSchema = {
  title: 'Schema for cart end point',
  type: 'object',
  $ref: '#/definitions/Welcome8',
  definitions: {
    Welcome8: {
      type: 'object',
      additionalProperties: false,
      properties: {
        token: {
          type: 'string'
        },
        note: {
          type: 'null'
        },
        attributes: {
          $ref: '#/definitions/Attributes'
        },
        original_total_price: {
          type: 'integer'
        },
        total_price: {
          type: 'integer'
        },
        total_discount: {
          type: 'integer'
        },
        total_weight: {
          type: 'integer'
        },
        item_count: {
          type: 'integer'
        },
        items: {
          type: 'array',
          items: {}
        },
        requires_shipping: {
          type: 'boolean'
        },
        currency: {
          type: 'string'
        },
        items_subtotal_price: {
          type: 'integer'
        },
        cart_level_discount_applications: {
          type: 'array',
          items: {}
        }
      },
      required: [
        'attributes',
        'cart_level_discount_applications',
        'currency',
        'item_count',
        'items',
        'items_subtotal_price',
        'note',
        'original_total_price',
        'requires_shipping',
        'token',
        'total_discount',
        'total_price',
        'total_weight'
      ],
      title: 'Welcome8'
    },
    Attributes: {
      type: 'object',
      additionalProperties: false,
      title: 'Attributes'
    }
  }
};
module.exports = cartSchema;
