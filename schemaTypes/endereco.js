import {defineField, defineType} from 'sanity'

export const tipoEndereco = defineType({
  name: 'endereco',
  title: 'Endereco',
  type: 'document',
  fields: [
    defineField({
      name: 'rua',
      type: 'String',
    }),
    defineField({
      name: 'numero',
      type: 'String',
    }),
    defineField({
      name: 'bairro',
      type: 'String',
    }),
    defineField({
      name: 'cidade',
      type: 'String',
    }),
    defineField({
      name: 'estado',
      type: 'String',
    }),
    defineField({
      name: 'pais',
      type: 'String',
    }),
    defineField({
      name: 'cep',
      type: 'String',
    }),
  ],
})