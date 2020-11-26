// eslint-disable-next-line no-unused-vars
import React, { CSSProperties, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.css';

export interface IElementStyle {
  contentStyle?: CSSProperties;
  containerStyle?: CSSProperties;
}

type TooltipProps = {
  render: string | React.ReactNode;
  children: string;
  position?: 'auto' | 'left' | 'right' | 'top' | 'bottom';
  elementStyle?: IElementStyle;
};

interface Boundry {
  all?: boolean;
  any?: boolean;
  top?: boolean;
  left?: boolean;
  right?: boolean;
  bottom?: boolean;
}

// undestructured
export const Tooltip: React.FC<TooltipProps> = ({
  render,
  children,
  position = 'auto',
  elementStyle
}) => {
  const tooltipSourceRef = useRef<HTMLSpanElement>(null);
  const tooltipElementRef = useRef<HTMLDivElement>(null);
  let tooltipMainElement: HTMLElement | null = null;
  const showTollTip: boolean = true;
  const buffer: number = 5;

  useEffect(() => {
    const id = 'smakTooltipMainContainer';
    tooltipMainElement = document.querySelector(`#${id}`);
    if (!tooltipMainElement) {
      tooltipMainElement = document.createElement('div');
      tooltipMainElement.setAttribute('id', id);
      tooltipMainElement.style.backgroundColor = 'blue';
      document.body.appendChild(tooltipMainElement);
    }
  }, []);

  const isOutOfViewPort = (elem: HTMLElement): Boundry => {
    var bounding = elem.getBoundingClientRect();
    var out: Boundry = {};
    out.top = bounding.top < 0;
    out.left = bounding.left < 0;
    out.bottom =
      bounding.bottom >
      (window.innerHeight || document.documentElement.clientHeight);
    out.right =
      bounding.right >
      (window.innerWidth || document.documentElement.clientWidth);
    out.any = out.top || out.left || out.bottom || out.right;
    out.all = out.top && out.left && out.bottom && out.right;

    return out;
  };

  const positionToolTip = (
    sourceElement: HTMLSpanElement | null,
    tooltipElement: HTMLSpanElement | null
  ) => {
    console.log('positionToolTip called');
    if (tooltipElement && sourceElement) {
      let sourceBoundries: DOMRect = sourceElement.getBoundingClientRect();
      let tooltipBoundries: DOMRect = tooltipElement.getBoundingClientRect();
      tooltipElement.style.left =
        sourceBoundries.left +
        sourceBoundries.width / 2 -
        tooltipBoundries.width / 2 +
        'px';
      if (
        position.toLowerCase() === 'top' ||
        position.toLowerCase() === 'auto'
      ) {
        tooltipElement.style.top =
          sourceBoundries.y - tooltipBoundries.height - buffer + 'px';
      } else if (position.toLowerCase() === 'left') {
        tooltipElement.style.top =
          sourceBoundries.y +
          sourceBoundries.height / 2 -
          tooltipBoundries.height / 2 +
          'px';
        tooltipElement.style.left =
          sourceBoundries.x - tooltipBoundries.width - buffer + 'px';
      } else if (position.toLowerCase() === 'right') {
        tooltipElement.style.top =
          sourceBoundries.y +
          sourceBoundries.height / 2 -
          tooltipBoundries.height / 2 +
          'px';
        tooltipElement.style.left =
          sourceBoundries.x + sourceBoundries.width + buffer + 'px';
      } else if (position.toLowerCase() === 'bottom') {
        tooltipElement.style.top =
          sourceBoundries.y + sourceBoundries.height + buffer + 'px';
      }

      const boundry: Boundry = isOutOfViewPort(tooltipElement);

      if (boundry.left) {
        tooltipElement.style.left = buffer + 'px';
        if (position.toLowerCase() === 'left') {
          tooltipElement.style.left =
            sourceBoundries.x + sourceBoundries.width + buffer + 'px';
        }
      }
      if (boundry.top) {
        if (
          position.toLowerCase() !== 'top' &&
          position.toLowerCase() !== 'auto'
        ) {
          tooltipElement.style.top = buffer + 'px';
        } else {
          tooltipElement.style.top =
            sourceBoundries.y + sourceBoundries.height + buffer + 'px';
        }
      }
      if (boundry.right) {
        if (position.toLowerCase() !== 'right') {
          tooltipElement.style.left =
            (window.innerWidth || document.documentElement.clientWidth) -
            tooltipBoundries.width -
            buffer +
            'px';
        } else {
          tooltipElement.style.left =
            sourceBoundries.x - tooltipBoundries.width - buffer + 'px';
        }
      }
      if (boundry.bottom) {
        if (
          position.toLowerCase() === 'bottom' ||
          position.toLowerCase() === 'auto'
        )
          tooltipElement.style.top =
            sourceBoundries.y - tooltipBoundries.height - buffer + 'px';
      }

      sourceBoundries = sourceElement.getBoundingClientRect();
      tooltipBoundries = tooltipElement.getBoundingClientRect();

      setupTriangle(tooltipElement, sourceBoundries, tooltipBoundries);
    }
  };

  const setupTriangle = (
    targetElement: HTMLSpanElement,
    sourceBoundries: DOMRect,
    tooltipBoundries: DOMRect
  ): void => {
    const color: string =
      elementStyle?.containerStyle?.backgroundColor || 'gray';
    targetElement.style.setProperty('--displayVal', 'block');

    targetElement.style.setProperty('--bottomVal', null);
    targetElement.style.setProperty('--topVal', null);
    targetElement.style.setProperty('--rightVal', null);
    targetElement.style.setProperty('--leftVal', null);
    targetElement.style.setProperty(
      '--borderBottomVal',
      '5px solid transparent'
    );
    targetElement.style.setProperty('--borderTopVal', '5px solid transparent');
    targetElement.style.setProperty(
      '--borderRightVal',
      '5px solid transparent'
    );
    targetElement.style.setProperty('--borderLeftVal', '5px solid transparent');
    if (sourceBoundries.x > tooltipBoundries.x + tooltipBoundries.width) {
      // For right Arrow
      targetElement.style.setProperty('--rightVal', `-${buffer * 2}px`);
      targetElement.style.setProperty(
        '--topVal',
        sourceBoundries.y - tooltipBoundries.y + buffer + 'px'
      );
      targetElement.style.setProperty('--borderLeftVal', `5px solid ${color}`);
    }
    if (sourceBoundries.x < tooltipBoundries.x) {
      // For left Arrow
      targetElement.style.setProperty('--leftVal', `-${buffer * 2}px`);
      targetElement.style.setProperty(
        '--topVal',
        sourceBoundries.y - tooltipBoundries.y + buffer + 'px'
      );
      targetElement.style.setProperty('--borderRightVal', `5px solid ${color}`);
    }
    if (sourceBoundries.y > tooltipBoundries.y + tooltipBoundries.height) {
      // For bottom Arrow
      targetElement.style.setProperty('--bottomVal', `-${buffer * 2}px`);
      targetElement.style.setProperty(
        '--leftVal',
        sourceBoundries.x +
          sourceBoundries.width / 2 -
          tooltipBoundries.x -
          buffer +
          'px'
      );
      targetElement.style.setProperty('--borderTopVal', `5px solid ${color}`);
    }
    if (sourceBoundries.y < tooltipBoundries.y) {
      // For top Arrow
      targetElement.style.setProperty('--topVal', `-${buffer * 2}px`);
      targetElement.style.setProperty(
        '--leftVal',
        sourceBoundries.x +
          sourceBoundries.width / 2 -
          tooltipBoundries.x -
          buffer +
          'px'
      );
      targetElement.style.setProperty(
        '--borderBottomVal',
        `5px solid ${color}`
      );
    }
  };

  const handleOnMouseEnter = () => {
    if (tooltipMainElement) {
      createTooltip();
    }
  };

  const createTooltip = () => {
    console.log('createTooltip called');
    console.log('tooltipMainElement', tooltipMainElement);
    console.log('tooltipElementRef', tooltipElementRef);
    console.log('showTollTip', showTollTip);
    return tooltipMainElement && showTollTip
      ? ReactDOM.render(
          <div
            ref={tooltipElementRef}
            className={styles['smak-tooltip-container']}
            style={elementStyle && elementStyle.containerStyle}
          >
            <div
              id='smakTooltipContent'
              style={elementStyle && elementStyle.contentStyle}
            >
              {render}
            </div>
          </div>,
          tooltipMainElement,
          () =>
            positionToolTip(tooltipSourceRef.current, tooltipElementRef.current)
        )
      : null;
  };

  const handleOnMouseLeave = () => {
    if (tooltipMainElement) {
      ReactDOM.unmountComponentAtNode(tooltipMainElement);
    }
  };

  return (
    <span>
      <span
        className={styles['smak-tooltip-source']}
        ref={tooltipSourceRef}
        onMouseOver={handleOnMouseEnter}
        onMouseOut={handleOnMouseLeave}
        onFocus={handleOnMouseEnter}
        onBlur={handleOnMouseLeave}
        tabIndex={0}
        role='button'
        aria-describedby='smakTooltipContent'
      >
        {children}
      </span>
    </span>
  );
};
