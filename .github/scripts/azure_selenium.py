import argparse
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
import chromedriver_autoinstaller
from pyvirtualdisplay import Display

import time

# Set up a virtual display
display = Display(visible=0, size=(800, 800))
display.start()

# Install ChromeDriver
chromedriver_autoinstaller.install()  # Check if the current version of chromedriver exists
# and if it doesn't exist, download it automatically,
# then add chromedriver to path

# Set up Chrome options
chrome_options = Options()
options = ["--window-size=1200,1200", "--ignore-certificate-errors"]

for option in options:
    chrome_options.add_argument(option)

# Parse command-line arguments
parser = argparse.ArgumentParser()
parser.add_argument("username")
parser.add_argument("password")
parser.add_argument("redirect_url")
args = parser.parse_args()

# Set up the webdriver
driver = webdriver.Chrome(options=chrome_options)
driver.get("https://portal.azure.com")

print("Logging in to Azure...")

# Log in to Azure

# Send keys to input with a placeholder: 'Email, phone, or Skype'
WebDriverWait(driver, 20).until(
    EC.element_to_be_clickable(
        (By.CSS_SELECTOR, "input[placeholder='Email, phone, or Skype']")
    )
).send_keys(args.username)

# Send keys to input with a placeholder: 'placeholder="Password"'
WebDriverWait(driver, 20).until(
    EC.element_to_be_clickable((By.CSS_SELECTOR, "input[placeholder='Password']"))
).send_keys(args.password)

driver.find_element(By.ID, "idSIButton9").click()

# Navigate to the app registration
driver.get(
    "https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationMenuBlade/Authentication/appId/34049628-fa93-4b39-b8c9-db594608afe1/isMSAApp//defaultBlade/"
)

# Add the redirect URI
redirect_url = args.redirect_url


# # Click target linkText="Add URI"
WebDriverWait(driver, 100).until(
    EC.element_to_be_clickable((By.LINK_TEXT, "Add URI"))
).click()

# Click input with placeholder="e.g. https://example.com/auth"
WebDriverWait(driver, 100).until(
    EC.element_to_be_clickable(
        (By.CSS_SELECTOR, "input[placeholder='e.g. https://example.com/auth']")
    )
).click()

# Type at an input with a placeholder of placeholder="e.g. https://example.com/auth"
WebDriverWait(driver, 100).until(
    EC.element_to_be_clickable(
        (By.CSS_SELECTOR, "input[placeholder='e.g. https://example.com/auth']")
    )
).send_keys(redirect_url)

# Simulate a smooth scroll like using mouse wheel to input[placeholder='e.g. https://example.com/auth']
driver.execute_script(
    "arguments[0].scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'})",
    WebDriverWait(driver, 100).until(
        EC.element_to_be_clickable(
            (By.CSS_SELECTOR, "input[placeholder='e.g. https://example.com/auth']")
        )
    ),
)

for i in range(1, 4):
    print(f"Waiting... {i} seconds")
    time.sleep(1)


# Simulate a javascript click like document.querySelector("#_weave_e_280 > div > div > div.fxs-lens-layout > div > div.fxs-part.fxs-part-no-fx-content-padding.fxs-part-for-template-blade > div.fxs-part-content.fxs-validationContainer.css-scope-Microsoft_AAD_RegisteredApps.css-scope-BladesApplicationsStylescss.css-scope-BladesAuthenticationStylescss.css-scope-BladesStylesWithWarningscss > div > div.msportalfx-docking-footer.msportalfx-padding > div:nth-child(1) > div").click()
WebDriverWait(driver, 100).until(
    EC.element_to_be_clickable(
        (
            By.CSS_SELECTOR,
            "#_weave_e_280 > div > div > div.fxs-lens-layout > div > div.fxs-part.fxs-part-no-fx-content-padding.fxs-part-for-template-blade > div.fxs-part-content.fxs-validationContainer.css-scope-Microsoft_AAD_RegisteredApps.css-scope-BladesApplicationsStylescss.css-scope-BladesAuthenticationStylescss.css-scope-BladesStylesWithWarningscss > div > div.msportalfx-docking-footer.msportalfx-padding > div:nth-child(1) > div",
        )
    )
).click()


print("Redirect URI added successfully!")

for i in range(1, 4):
    print(f"Waiting... {i} seconds")
    time.sleep(1)

driver.quit()
