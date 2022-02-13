export default function singleAccount({ accountData }) {
    const allAccounts = accountData;
    return <div>
        <h1>Welcome to accounts/account_id page</h1>
        {
            <>
            <div>
                <ul class="list-group">
                    <h2>Account #: {allAccounts.account_id}</h2>
                    <label class="list-group-item">userid: {allAccounts.userid}</label>
                    <label class="list-group-item">user_pass: {allAccounts.user_pass}</label>
                    <label class="list-group-item">email: {allAccounts.email}</label>
                    <label class="list-group-item">group_id: {allAccounts.group_id}</label>
                    <label class="list-group-item">state: {allAccounts.state}</label>
                    <label class="list-group-item">unban_time: {allAccounts.unban_time}</label>
                    <label class="list-group-item">logincount: {allAccounts.logincount}</label>
                    <label class="list-group-item">birthdate: {allAccounts.birthdate}</label>
                    <label class="list-group-item">character_slots: {allAccounts.character_slots}</label>
                    <label class="list-group-item">pincode_change: {allAccounts.pincode_change}</label>
                    <label class="list-group-item">vip_time: {allAccounts.vip_time}</label>
                    <label class="list-group-item">old_group: {allAccounts.old_group}</label>
                    <label class="list-group-item">web_auth_token: {allAccounts.web_auth_token}</label>
                    <label class="list-group-item">web_auth_token_enabled: {allAccounts.web_auth_token_enabled}</label>
                </ul>
            </div><br />
        </>
        }
    </div>
}

export async function getStaticProps({params}) {
    const newvar = parseInt(params.account_id);
    const res = await fetch('http://localhost:8080/api/v1/accounts/'+ newvar);
    const accountData = await res.json();
    console.log(accountData);
    return {
        props: { accountData }
    }
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:8080/api/v1/accounts/');
    const accountData = await res.json();
    const paths = accountData.map((account) => ({
        params: { account_id: account.account_id.toString()}
    }))

    return { paths, fallback: false }
}