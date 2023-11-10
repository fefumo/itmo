import yaml
import dicttoxml
import xml.dom.minidom
import os.path 
in_file = os.path.basename('C:/coding/itmo/inf/lab4/dop1/dop1.yaml')
out_file = os.path.basename('C:/coding/itmo/inf/lab4/dop1/dop1.xml')

with open(in_file, 'r', encoding='UTF-8') as f:
    data = yaml.safe_load(f)
    dict_xml = dicttoxml.dicttoxml(data, return_bytes=False)
    parsed_xml = xml.dom.minidom.parseString(dict_xml)
    with open(out_file, 'w', encoding='UTF-8') as d:
        d.write(parsed_xml.toprettyxml())
