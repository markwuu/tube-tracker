export enum Colors {
  Black = '#30343F',
  Black100 = '#35363A',
  DarkBlue = '#33363b',
  Green = '#24C5A1',
  LightBlue = '#5CBCFF',
  LightGray = '#E1E7ED',
  Pink = '#FF638F',
  Purple = '#8C91FF',
  Red = '#BA1200',
  Blue100 = '#8C91FF',
  Blue500 = '#2E86AB',
  Blue900 = '#0A2463',
  Gray100 = '#EEE',
  Gray200 = '#DDE1E7',
  Gray300 = '#CACDD3',
  Gray400 = '#C3CAD3',
  White = '#FFF',
}

// tslint:disable:no-bitwise
export const lightenColor = (color: Colors, percent: number) => {
  const f = parseInt(color.slice(1), 16)
  const t = percent < 0 ? 0 : 255
  const p = percent < 0 ? percent * -1 : percent
  const R = f >> 16
  const G = (f >> 8) & 0x00ff
  const B = f & 0x0000ff

  return (
    '#' +
    (
      0x1000000 +
      (Math.round((t - R) * p) + R) * 0x10000 +
      (Math.round((t - G) * p) + G) * 0x100 +
      (Math.round((t - B) * p) + B)
    )
      .toString(16)
      .slice(1)
  )
}

export const darkenColor = (color: Colors, percent: number) =>
  lightenColor(color, -percent)
