export function assertWebElementCssAttribute(element, attribute, expectedValue) {
    element.invoke('css', attribute).then((value) => {
        value = parseInt(value.replace('px', ''));
        expect(Math.abs(value - expectedValue) / expectedValue * 100).to.lessThan(10);
    });
}