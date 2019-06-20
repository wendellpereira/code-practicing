from urllib import urlopen
response = urlopen('https://easyplanner.com.br/index.html')
for line in response:
     line = line.decode('utf-8')  # Decoding the binary data to text.
     print(line)
