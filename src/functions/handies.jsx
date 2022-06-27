import React from 'react'

import { BLOCKS } from '@contentful/rich-text-types'

import PostMedia from '../components/atoms/PostMedia'

export const isObject = (obj) => obj instanceof Object && obj.constructor === Object

export const isInt = (value) => {
  if (Number.isNaN(value)) {
    return false
  }
  const x = parseFloat(value)
  // eslint-disable-next-line no-bitwise
  return (x | 0) === x
}

// options for rendering images from Contentful's rich text
export const renderOptions = (links) => {
  // create an asset map
  const assetMap = new Map()

  if (isObject(links)) {
    // loop through the linked assets and add them to a map
    // eslint-disable-next-line no-unsafe-optional-chaining
    for (const asset of links?.assets?.block || []) {
      assetMap.set(asset.sys.id, asset)
    }

    return {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
          console.log(node)
          // find the asset in the assetMap by ID
          const asset = assetMap.get(node.data.target.sys.id)

          return (
            <PostMedia
              contentType={asset?.contentType}
              description={asset?.description}
              url={asset?.url || ''}
            />
          )
        },
      },
    }
  }
}
