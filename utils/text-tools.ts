export const getInitials = (fullName: string) => {
    const [firstName, ...name] = fullName.split(" ");

    return firstName + " " + name.map((el) => el[0].toUpperCase()).join(".");
};

export const cutText = (text: string, allowedLength = 25) => {
    if (text.length <= allowedLength) {
        return text;
    }
    return text.slice(0, allowedLength) + "...";
};
