import {
  trigger,
  state,
  style,
  transition,
  animate,
  animateChild,
  query,
} from '@angular/animations';

export const onSideNavChange = trigger('onSideNavChange', [
  state(
    'close',
    style({
      'min-width': '50px',
    })
  ),
  state(
    'open',
    style({
      'min-width': '200px',
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);

export const onMainContentChange = trigger('onMainContentChange', [
  state(
    'close',
    style({
      'margin-left': '62px',
    })
  ),
  state(
    'open',
    style({
      'margin-left': '200px',
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);

export const animateText = trigger('animateText', [
  state(
    'hide',
    style({
      display: 'none',
      opacity: 0,
    })
  ),
  state(
    'show',
    style({
      display: 'block',
      opacity: 1,
    })
  ),
  transition('close => open', animate('350ms ease-in')),
  transition('open => close', animate('200ms ease-out')),
]);

export const animateExpanded = trigger('detailExpand', [
  state(
    'collapsed', 
    style({
      height: '0px', 
      minHeight: '0'
    })
  ),
  state(
    'expanded', 
    style({
      height: '*'
    })
  ),
  transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
]);
