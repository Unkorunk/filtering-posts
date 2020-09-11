var React = require('react');

export default function Combobox({ value, options, onChange }) {
    return (
        <select value={value} onChange={onChange}>
            {
                options.map((option, index) => {
                    return (<option key={index} value={option.value}>{option.title}</option>);
                })
            }
        </select>
    );
}
