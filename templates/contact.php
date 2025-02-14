<section id="contact" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
            <h2 class="text-3xl font-bold text-center mb-8">Start Your Journey</h2>
            <form id="leadForm" class="space-y-6">
                <div>
                    <label class="block text-gray-700 mb-2" for="name">Full Name</label>
                    <input type="text" id="name" name="name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required>
                </div>
                <div>
                    <label class="block text-gray-700 mb-2" for="email">Email</label>
                    <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required>
                </div>
                <div>
                    <label class="block text-gray-700 mb-2" for="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required>
                </div>
                <div>
                    <label class="block text-gray-700 mb-2" for="country">Preferred Country</label>
                    <select id="country" name="country" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required>
                        <option value="">Select a country</option>
                        <option value="russia">Russia</option>
                        <option value="uzbekistan">Uzbekistan</option>
                        <option value="kazakhstan">Kazakhstan</option>
                        <option value="philippines">Philippines</option>
                        <option value="georgia">Georgia</option>
                        <option value="kyrgyzstan">Kyrgyzstan</option>
                        <option value="egypt">Egypt</option>
                    </select>
                </div>
                <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition duration-300">Submit Application</button>
            </form>
        </div>
    </div>
</section>
