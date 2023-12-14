const slugify = (str) => {
  return str.toLowerCase().replace(' ', '-');
};

const getNormalizedRGBA = (rgbaString) => {
  const regex = /rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d*(?:\.\d+)?)\)/;
  const match = rgbaString.match(regex);

  if (match) {
    const alpha = parseFloat(match[4]);
    // TODO: fixed decimal points to 3
    const normalizedAlpha = alpha > 1 ? alpha / 100 : alpha;
    const value = {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3]),
      a: normalizedAlpha,
    };
    return `rgba(${value.r}, ${value.g}, ${value.b}, ${value.a})`;
  } else {
    throw new Error('Invalid RGBA string');
  }
};

export const arrayToObject = (arr) => {
  return arr.reduce((acc, cur) => {
    acc = {
      ...acc,
      ...cur,
    };
    return acc;
  }, {});
};

const findObjectByKey = (obj, key) => {
  if (obj[key]) {
    return obj[key];
  }

  for (const currentKey of Object.keys(obj)) {
    if (typeof obj[currentKey] === 'object') {
      const found = findObjectByKey(obj[currentKey], key);
      if (found) {
        return found;
      }
    }
  }
};

export const mapSpacingValues = (data) => {
  const spacing = findObjectByKey(data, 'Spacing');

  if (!spacing) return;

  const dictionary = {};

  Object.keys(spacing).forEach((key) => {
    const value = spacing[key].$value;
    const keyName = slugify(key);

    dictionary[keyName] = `${value}px`;
  });

  return dictionary;
};

export const mapBorderRadiusValues = (data) => {
  const borderRadius = findObjectByKey(data, 'Border Radius');

  if (!borderRadius) return;

  const dictionary = {};

  Object.keys(borderRadius).forEach((key) => {
    const value = borderRadius[key].$value;
    const keyName = slugify(key);

    // ensure the value is defined
    if (value !== undefined && value !== null) {
      dictionary[keyName] = `${value}px`;
    }
  });

  return dictionary;
};

// TODO: map light and dark themes
export const mapColorValues = (data) => {
  const result = findObjectByKey(data['Primitive'], 'Default Mode');

  const dictionary = Object.keys(result).reduce((acc, cur) => {
    const current = result[cur];
    const firstChildKey = Object.keys(current)[0];
    const isChildAColor = current[firstChildKey].$type === 'color';
    const keyName = slugify(cur);

    if (isChildAColor) {
      const colorMap = {};
      for (const colorKey of Object.keys(current)) {
        const colorValue = current[colorKey].$value;
        const isRGBA = colorValue.startsWith('rgba');
        const colorName = colorKey.toLowerCase();

        colorMap[colorName] = isRGBA ? getNormalizedRGBA(colorValue) : colorValue;
      }
      acc[keyName] = colorMap;
    }

    return acc;
  }, {});

  return dictionary;
};

export const mapFontValues = (data) => {
  const fontSizes = findObjectByKey(data['Typescale'], 'Size');
  const lineHeights = findObjectByKey(data['Typescale'], 'Line height');
  const letterSpacings = findObjectByKey(data['Typescale'], 'Letter spacing');
  const fontWeights = findObjectByKey(data['Typescale'], 'Font weight');

  const output = {};

  // Map font size and line height
  Object.keys(fontSizes).forEach((key) => {
    const fontSize = fontSizes[key].$value;
    const keyName = slugify(key);

    const lineHeight = lineHeights[key].$value;
    const letterSpacing = letterSpacings[key].$value;
    const fontWeight = fontWeights[key].$value;

    output[keyName] = [
      `${fontSize}px`,
      {
        lineHeight: `${lineHeight}px`,
        letterSpacing: `${letterSpacing}px`,
        fontWeight,
      },
    ];
  });

  return output;
};

const mapScreenValues = (data) => {
  const breakpoints = findObjectByKey(data['Screens'], 'breakpoint');

  const output = {};

  Object.keys(breakpoints).forEach((key) => {
    const value = breakpoints[key].$value;
    const keyName = slugify(key);

    output[keyName] = `${value}px`;
  });

  return output;
};

export const crawlFigmaFileData = (figmaFileObject) => {
  return {
    theme: {
      colors: mapColorValues(figmaFileObject),
      spacing: mapSpacingValues(figmaFileObject),
      borderRadius: mapBorderRadiusValues(figmaFileObject),
      fontSize: mapFontValues(figmaFileObject),
      screens: mapScreenValues(figmaFileObject),
    },
  };
};
