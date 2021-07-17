import { SplitAreaDirective } from '../directives';
import { basisToValue } from './basis-to-value.util';
import { getMinMaxPct } from './get-min-max-pct.util';
import { isPercent } from './is-percent.util';

export function resizeAreaBy(
  area: SplitAreaDirective,
  _delta: number,
  basisToPx: number
): number {
  const [grow, shrink, basis] = area.currentFlexParts!;
  const isPct = isPercent(basis);
  const basisValue = basisToValue(basis);

  // get baseBasis in percent
  const baseBasis = area.initialFlexParts![2];
  const baseBasisPct = isPercent(baseBasis)
    ? basisToValue(baseBasis)
    : basisToValue(baseBasis) / basisToPx;

  // get basis in px and %
  const basisPx = isPct ? basisValue * basisToPx : basisValue;

  // determine which dir and calc the diff
  let newBasisPx = basisPx + _delta;
  let newBasisPct = newBasisPx / basisToPx;

  const [minBasisPct, maxBasisPct] = getMinMaxPct(
    area.minBasis!,
    area.maxBasis!,
    grow,
    shrink,
    baseBasisPct,
    basisToPx
  );

  // obey max and min
  newBasisPct = Math.max(newBasisPct, minBasisPct);
  newBasisPct = Math.min(newBasisPct, maxBasisPct);

  // calculate new basis on px
  newBasisPx = newBasisPct * basisToPx;

  // update flexlayout
  area.updateBasis(isPct ? newBasisPct + '%' : newBasisPx + 'px');

  // return actual change in px
  return newBasisPx - basisPx;
}
