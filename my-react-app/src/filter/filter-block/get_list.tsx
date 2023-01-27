function getList(selectObject) {
    return Object.entries(selectObject).map(([key, value]) => (
        <option>{value}</option>
    ));
}

export { getList };
