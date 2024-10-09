import {defineField, defineType} from 'sanity'

export const tipoPessoa = defineType({
  name: 'pessoa',
  title: 'Pessoa',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      type: 'int',
    }),
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'dataNascimento',
      type: 'Date',
    }),
    defineField({
      name: 'email',
      type: 'String',
    }),
    defineField({
      name: 'telefone',
      type: 'String',
    }),
    defineField({
      name: 'imagemPerfil',
      type: 'imagem',
    }),
    defineField({
      name: 'ativo',
      type: 'boolean',
    }),
    defineField({
      name: 'endereco',
      type: 'Endereco',
    }),
    
  ],
})