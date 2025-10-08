<div class="fastsvelte-ad">
	<div class="ad-container">
		
		<h3>🚀 SaaS Uygulamanızı Aylar Değil, Saatler İçinde Yayınlayın</h3>
		<p>
			FastSvelte ile FastAPI + SvelteKit + PostgreSQL kullanarak tam özellikli SaaS uygulamaları geliştirin.
			Kimlik doğrulama, ödeme entegrasyonu, admin paneli ve daha fazlası hazır.
			<strong>215+ saat geliştirme süresinden tasarruf edin.</strong>
		</p>
		<div class="features">
			<span>✓ Stripe Ödemeler</span>
			<span>✓ Google OAuth</span>
			<span>✓ AI/ML Hazır</span>
			<span>✓ Docker</span>
		</div>
		<a href="https://fastsvelte.dev/" target="_blank" rel="noopener noreferrer" class="ad-button">
			FastSvelte'i Keşfedin →
		</a>
	</div>
</div>

<style>
	.fastsvelte-ad {
		margin: 3rem 0;
		padding: 0;
	}

	.ad-container {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		border-radius: 12px;
		padding: 2rem;
		color: white;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.ad-container::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
		pointer-events: none;
	}

	.ad-container:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	}

	.ad-badge {
		display: inline-block;
		background: rgba(255, 255, 255, 0.2);
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		margin-bottom: 1rem;
	}

	.ad-container h3 {
		margin: 0 0 1rem 0;
		font-size: 1.5rem;
		font-weight: 700;
		color: white;
		position: relative;
	}

	.ad-container p {
		margin: 0 0 1.25rem 0;
		line-height: 1.6;
		opacity: 0.95;
		color: white;
		position: relative;
	}

	.ad-container p strong {
		font-weight: 700;
		opacity: 1;
	}

	.features {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-bottom: 1.5rem;
		position: relative;
	}

	.features span {
		background: rgba(255, 255, 255, 0.15);
		padding: 0.4rem 0.75rem;
		border-radius: 6px;
		font-size: 0.875rem;
		font-weight: 500;
		backdrop-filter: blur(10px);
	}

	.ad-button {
		display: inline-block;
		background: white;
		color: #667eea;
		padding: 0.75rem 1.5rem;
		border-radius: 6px;
		text-decoration: none;
		font-weight: 600;
		transition: all 0.3s ease;
		position: relative;
	}

	.ad-button:hover {
		background: #f8f9fa;
		color: #764ba2;
		transform: scale(1.05);
	}

	@media (max-width: 768px) {
		.ad-container {
			padding: 1.5rem;
		}

		.ad-container h3 {
			font-size: 1.25rem;
		}

		.features {
			gap: 0.5rem;
		}

		.features span {
			font-size: 0.8rem;
			padding: 0.35rem 0.6rem;
		}
	}
</style>
