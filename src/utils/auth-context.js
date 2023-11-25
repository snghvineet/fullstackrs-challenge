const { useRouter } = require('next/router');
const { createContext, useContext, useState, useEffect } = require('react');
const { createClient } = require('./client');

const AuthContext = createContext();

const useAuth = () => {
	return useContext(AuthContext);
};

const useProvideAuth = () => {
	const router = useRouter();
	const supabase = createClient();
	const [user, setUser] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (supabase.auth.user()) {
			setUser(supabase.auth.user());
			setLoggedIn(true);
			setLoading(false);
		}

		let unsubscribe = supabase.auth.onAuthStateChange((event, session) => {
			if (session) {
				setUser(supabase.auth.user());
				setLoggedIn(true);
				setLoading(false);

				return;
			}

			setLoggedIn(false);
			setUser(null);
			setLoading(false);
		});

		return () => unsubscribe();
	}, [supabase.auth]);

	return {
		user,
		loggedIn,
	};
};
