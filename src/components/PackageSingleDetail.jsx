export default function PackageSingleDetail({ header, value }) {
    return (
        <div>
            <p className="sub-header">{header}</p>
            <p className="detail">{value}</p>
        </div>
    );
}
