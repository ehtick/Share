import Canvas from 'canvas'
// Needed for async test
import 'regenerator-runtime/runtime'
import * as THREE from 'three'
const glContext = require('gl')(1, 1) // headless-gl


beforeAll(() => {
  const window = {innerWidth: 800, innerHeight: 600}
  const canvasGL = new Canvas.Canvas(window.innerWidth, window.innerHeight)
  // mock function to avoid errors inside THREE.WebGlRenderer()
  canvasGL.addEventListener = function(event, func, bind_) {}
  const mockRenderer = new THREE.WebGLRenderer({
    context: glContext,
    antialias: true,
    canvas: canvasGL,
  })

  jest.mock('three', () => ({
    ...jest.requireActual('three'),
    WebGLRenderer: jest.fn().mockImplementation(() => {
      return mockRenderer
    }),
  }))
})


import React from 'react'
import {render} from '@testing-library/react'
import {mockRoutes} from '../BaseRoutesMock.test'
import Share from './Share'


test('Share', () => {
  const {getByText} = render(mockRoutes(
      <Share
        installPrefix={'/'}
        appPrefix={'share'}
        pathPrefix={'v/p'} /> ))
  expect(getByText(/BLDRS/i)).toBeInTheDocument()
})