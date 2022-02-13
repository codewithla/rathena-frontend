export default function AllAccounts({ accountData }) {
    const allAccounts = { accountData };
    return <div>
        <h1>Welcome to accounts page</h1>
        {
            accountData.map(
                (account) => <>
                    <div>
                        <ul class="list-group">
                            <h2>Account #: {account.account_id}</h2>
                            <label class="list-group-item">userid: {account.userid}</label>
                            <label class="list-group-item">user_pass: {account.user_pass}</label>
                            <label class="list-group-item">email: {account.email}</label>
                            <label class="list-group-item">group_id: {account.group_id}</label>
                            <label class="list-group-item">state: {account.state}</label>
                            <label class="list-group-item">unban_time: {account.unban_time}</label>
                            <label class="list-group-item">logincount: {account.logincount}</label>
                            <label class="list-group-item">birthdate: {account.birthdate}</label>
                            <label class="list-group-item">character_slots: {account.character_slots}</label>
                            <label class="list-group-item">pincode_change: {account.pincode_change}</label>
                            <label class="list-group-item">vip_time: {account.vip_time}</label>
                            <label class="list-group-item">old_group: {account.old_group}</label>
                            <label class="list-group-item">web_auth_token: {account.web_auth_token}</label>
                            <label class="list-group-item">web_auth_token_enabled: {account.web_auth_token_enabled}</label>
                        </ul>
                    </div><br />
                </>
            )
        }
    </div>
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:8080/api/v1/accounts/');
    const accountData = await res.json();

    return {
        props: { accountData }
    }
}