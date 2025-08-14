"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent', 'Brissa', 'Itzel', 'Jazmin', 'Daiane', 'Regina', 'Angela');
    console.log({ superman });
})();
