import { mockPrices } from '../mocks/prices';
import { USE_MOCK, API_URL } from '../config';

export async function getPrices() {
  if (USE_MOCK) {
    // Symuluje opóźnienie sieciowe (usuń w produkcji)
    await new Promise((resolve) => setTimeout(resolve, 300));
    return mockPrices;
  }

  const res = await fetch(`${API_URL}/services`);
  if (!res.ok) throw new Error('Błąd pobierania cennika');
  return res.json();
}
