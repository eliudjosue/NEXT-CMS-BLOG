import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk' // Cambiar structureTool por deskTool
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'brandwavee',

  projectId: '9cudso69',
  dataset: 'production',

  plugins: [deskTool(), visionTool()], // Cambiar structureTool por deskTool

  schema: {
    types: schemaTypes,
  },
})
