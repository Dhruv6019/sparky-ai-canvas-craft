
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'rainbow': 'conic-gradient(from 0deg, #ff0080, #00ffff, #8000ff, #ff8000, #ff0080)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px) scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.8)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(147, 51, 234, 0.8)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)',
					},
					'25%': {
						transform: 'translateY(-10px) rotate(1deg)',
					},
					'50%': {
						transform: 'translateY(-20px) rotate(0deg)',
					},
					'75%': {
						transform: 'translateY(-10px) rotate(-1deg)',
					}
				},
				'holographic': {
					'0%': {
						transform: 'rotate(0deg)',
						filter: 'hue-rotate(0deg)',
					},
					'100%': {
						transform: 'rotate(360deg)',
						filter: 'hue-rotate(360deg)',
					}
				},
				'voice-pulse': {
					'0%, 100%': {
						transform: 'scale(1)',
						opacity: '1'
					},
					'50%': {
						transform: 'scale(1.2)',
						opacity: '0.7'
					}
				},
				'ripple': {
					'0%': {
						transform: 'scale(0)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(3)',
						opacity: '0'
					}
				},
				'morphing': {
					'0%, 100%': {
						borderRadius: '50%',
						transform: 'rotate(0deg)'
					},
					'25%': {
						borderRadius: '40% 60% 60% 40%',
						transform: 'rotate(90deg)'
					},
					'50%': {
						borderRadius: '60% 40% 40% 60%',
						transform: 'rotate(180deg)'
					},
					'75%': {
						borderRadius: '40% 60% 40% 60%',
						transform: 'rotate(270deg)'
					}
				},
				'particle-float': {
					'0%, 100%': {
						transform: 'translate(0, 0) rotate(0deg)',
						opacity: '0.8'
					},
					'33%': {
						transform: 'translate(30px, -30px) rotate(120deg)',
						opacity: '1'
					},
					'66%': {
						transform: 'translate(-20px, 20px) rotate(240deg)',
						opacity: '0.6'
					}
				},
				'energy-surge': {
					'0%': {
						transform: 'scale(1)',
						filter: 'brightness(1) saturate(1)'
					},
					'50%': {
						transform: 'scale(1.1)',
						filter: 'brightness(1.3) saturate(1.5)'
					},
					'100%': {
						transform: 'scale(1)',
						filter: 'brightness(1) saturate(1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'holographic': 'holographic 8s linear infinite',
				'voice-pulse': 'voice-pulse 1.5s ease-in-out infinite',
				'ripple': 'ripple 1.5s ease-out infinite',
				'morphing': 'morphing 8s ease-in-out infinite',
				'particle-float': 'particle-float 4s ease-in-out infinite',
				'energy-surge': 'energy-surge 2s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
