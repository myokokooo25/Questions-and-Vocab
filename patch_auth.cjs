const fs = require('fs');

let code = fs.readFileSync('contexts/AuthContext.tsx', 'utf8');

if (!code.includes('onAuthStateChange')) {
  // Add effect for onAuthStateChange
  code = code.replace(
    "initializeAuth();\n  }, []);",
    `initializeAuth();

    // Listen for Supabase OAuth login
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        // Map Supabase user to our User type
        const userData = {
          accessKey: 'GOOGLE_AUTH',
          userName: session.user.user_metadata?.full_name || session.user.email || 'Google User',
          type: 'permanent',
          isAdmin: false,
          loggedInAt: new Date().toISOString()
        };
        localStorage.setItem(LOGGED_IN_USER_KEY, JSON.stringify(userData));
        setUser(userData as any);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);`
  );

  // Update logout function to also logout from Supabase
  code = code.replace(
    "const logout = () => {",
    "const logout = async () => {\n    await supabase.auth.signOut();"
  );
  
  // Make logout async in the interface
  code = code.replace(
    "logout: () => void;",
    "logout: () => void | Promise<void>;"
  );

  fs.writeFileSync('contexts/AuthContext.tsx', code);
}
